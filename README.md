# React Native Hook Notification

Add notifications in your React Native app. Types: success, error, warning, info, default or custom.

![Demo](demo.png)

## Install

```shell
npm install react-native-hook-notification
```

or

```shell
yarn add react-native-hook-notification
```

## Usage

- On app index file:

```js
import React from 'react';
import { Component } from './component/Component';

export default function App() {
  return (
    <>
      <Component>
        <NotificationContainer />
      </Component>
    </>
  );
}
```

- On app component file:

```js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNotification } from 'react-native-hook-notification';

export default function Component() {
  const notification = useNotification();

  return (
    <TouchableOpacity
      onPress={() =>
        notification.success({
          text: 'Notification test',
        })
      }
    >
      <Text>Dispatch</Text>
    </TouchableOpacity>
  );
}
```

### Props

| Property        | Type                                                                                | Required | Default   | Description                                                |
| --------------- | ----------------------------------------------------------------------------------- | -------- | --------- | ---------------------------------------------------------- |
| text            | string                                                                              | yes      |           | Notification text                                          |
| title           | string                                                                              | no       |           | Notification title                                         |
| position        | top-right \| top-center \| top-left \| bottom-right \| bottom-center \| bottom-left | no       | top-right | Notification position                                      |
| theme           | colored \| light \| dark                                                            | no       | colored   | Notification theme                                         |
| transition      | bounce \| flip \| fade \| slide \| zoom                                             | no       | bounce    | Notification transition                                    |
| delay           | number                                                                              | no       | 5000      | Notification delay in milliseconds                         |
| showButtonClose | boolean                                                                             | no       | false     | Show or hide close button                                  |
| closeOnPress    | boolean                                                                             | no       | true      | Close on click                                             |
| showIcon        | boolean                                                                             | no       | true      | Show or hide icon                                          |
| autoClose       | boolean                                                                             | no       | true      | Automatic closing of the notification after the delay ends |
| pauseOnPress    | boolean                                                                             | no       | true      | Auto close pause on hover                                  |
| draggable       | boolean                                                                             | no       | true      | Enable or disable drag                                     |
| icon            | React.FunctionComponentElement                                                      | no       | true      | Render icon on left side. Obs.: Dimensions: 24x24          |
| titleMaxLines   | number                                                                              | no       | 1         | Maximum number of lines for title                          |
| textMaxLines    | number                                                                              | no       | 2         | Maximum number of lines for text                           |
| customStyle     | number                                                                              | no       | 2         | Styles for custom notificaion type                         |

## LICENSE

[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat&logoColor=f00&link=https://opensource.org/licenses/MIT)](https://opensource.org/licenses/MIT)

Developed by: [André Coelho](https://andrecoelho.dev)
