import { NotificationType } from '../../types/Notification';
import { NotificationStore } from '../NotificationStore';

jest.useFakeTimers();

describe('NotificationStore', () => {
  const notificationData = {
    id: String(Date.now()),
    type: 'success' as NotificationType,
    text: 'test',
  };
  it('should be able to add notification', () => {
    const notificationStore = NotificationStore.getInstance();
    notificationStore.subscribe(jest.fn());

    notificationStore.add(notificationData);

    expect(notificationStore.get()).toHaveLength(1);
  });

  it('should be able to remove notification', () => {
    const notificationStore = NotificationStore.getInstance();
    notificationStore.subscribe(jest.fn());

    notificationStore.add(notificationData);
    jest.advanceTimersByTime(500);
    notificationStore.remove();

    expect(notificationStore.get()).toHaveLength(0);
  });
});
