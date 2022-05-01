import { renderHook } from '@testing-library/react-hooks';

import { NotificationStore } from '../../../store/NotificationStore';
import { NotificationType } from '../../../types/Notification';
import { useController } from '../useController';

const notificationStore = NotificationStore.getInstance();

const notificationBaseData = {
  type: 'default' as NotificationType,
  text: 'text test',
};

const idTopRight = String(Date.now());

describe('Notifications controller hook', () => {
  beforeAll(() => {
    notificationStore.add({
      ...notificationBaseData,
      id: idTopRight,
      position: 'top-right',
    });
  });

  it('should be able to get notifications', () => {
    const { result } = renderHook(useController);

    expect(result.current.notifications).toHaveLength(1);
  });

  it('should be able to remove notification', async () => {
    const spiedRemove = jest
      .spyOn(notificationStore, 'remove')
      .mockImplementation();
    const { result } = renderHook(useController);

    result.current.onRemove();

    expect(spiedRemove).toBeCalled();
  });
});
