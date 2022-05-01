import { Dispatch, SetStateAction } from 'react';

import { NotificationProps } from '../types/Notification';

export type NotificationData = Omit<NotificationProps, 'onRemove' | 'amount'>;

const DELAY = 500;

export class NotificationStore {
  private static instance: NotificationStore;

  private notifications: NotificationData[];

  private setState: Dispatch<SetStateAction<NotificationData[]>> | undefined;

  private constructor() {
    this.notifications = [];
  }

  static getInstance(): NotificationStore {
    if (!NotificationStore.instance) {
      NotificationStore.instance = new NotificationStore();
    }
    return NotificationStore.instance;
  }

  subscribe(setState: Dispatch<SetStateAction<NotificationData[]>>): void {
    this.setState = setState;
  }

  private updateNotification(notification: NotificationData): void {
    this.notifications = [notification];
    this.setState?.(this.notifications);
  }

  add(notification: NotificationData): void {
    if (this.notifications.length) {
      this.remove();
      setTimeout(() => {
        this.updateNotification(notification);
      }, DELAY);
    } else {
      this.updateNotification(notification);
    }
  }

  remove(): void {
    this.notifications = [];
    this.setState?.([]);
  }

  get(): NotificationData[] {
    return this.notifications;
  }
}
