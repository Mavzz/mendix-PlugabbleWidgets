# mendix-PlugabbleWidgets

This repository contains a collection of pluggable widgets for Mendix.

## Widgets

### LinearGradient

A Mendix pluggable widget for creating linear gradients in React Native applications.

#### Features
- Create custom linear gradients with a specified array of colors.
- Configure gradient direction with start and end points.
- Embed other Mendix widgets within the gradient container.

#### Usage
1.  **Colors**: Provide a comma-separated string of hex color values (e.g., `#FF0000,#00FF00`).
2.  **Content**: Place any Mendix widgets you want to display on top of the gradient inside the `LinearGradient` widget.
3.  **Gradient Configuration**: An optional JSON object to control the gradient's start and end points.

    **Example `gradientConfig`:**
    ```json
    {
      "colors": ["#8dfffdff", "#FFFFFF"],
      "start": { "x": 0, "y": 0 },
      "end": { "x": 1, "y": 1 }
    }
    ```

    - `colors`: An array of color strings. If not provided, a default gradient is used.
    - `start`: An object with `x` and `y` coordinates (0 to 1) for the gradient's start point. Defaults to `{ x: 0, y: 0 }`.
    - `end`: An object with `x` and `y` coordinates (0 to 1) for the gradient's end point. Defaults to `{ x: 1, y: 1 }`.

### Toastify
A Mendix pluggable widget for displaying toast notifications using the `react-hot-toast` library.

#### Features
- Display toast notifications with a custom message.
- Configure the position and duration of the toast.

#### Usage
1.  **Toaster Message**: Provide the text you want to display in the toast notification.

#### Demo project
[link to sandbox]

#### Issues, suggestions and feature requests
[link to GitHub issues]

#### Development and contribution
1.  Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
2.  Run `npm start` to watch for code changes. On every change:
    - The widget will be bundled.
    - The bundle will be included in a `dist` folder in the root directory of the project.
    - The bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.