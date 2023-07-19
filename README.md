# Marching Squares Algorithm Visualizer

This is a visualizer for the Marching Squares algorithm implemented using p5.js, a JavaScript library for creative coding and visualization. The algorithm uses Perlin noise to generate random numbers and applies the Marching Squares technique to create visually interesting patterns.

## How It Works

The Marching Squares algorithm is a technique commonly used in computer graphics to create contour lines or isolate regions of constant values in a 2D field. It works by dividing the field into a grid of cells and determining the state of each cell based on the values of its corners. By connecting the appropriate edges of adjacent cells, the algorithm generates contours or regions.

In this visualizer, the Perlin noise function is utilized to obtain random values within a range of 0 to 1. These values are used to determine the state of each cell in the grid, resulting in a dynamic and evolving pattern. The algorithm calculates the state of each cell by rounding the noise value and combining the results to form an index. Based on this index, the appropriate edges are drawn to visualize the contours or regions.

## Live Demo

You can try out the Tic-Tac-Toe game by visiting the [live demo](https://editor.p5js.org/Ahad_BDB/full/V_jRlf725).

## Usage

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. The visualizer will start automatically, and you can observe the evolving pattern.
4. The visualizer utilizes Perlin noise, so the pattern will change gradually over time.
5. You can adjust the parameters like `tileSize`, `inc`, and `zoff` in the code to experiment with different visual effects.
6. Feel free to modify the code and customize the visualizer according to your preferences.

## Files and Directory Structure

- `index.html`: The main HTML file that includes the necessary scripts and sets up the canvas.
- 
- `sketch.js`: The p5.js sketch file that contains the logic and rendering functions for the visualizer.
- 
- `style.css`: The CSS file that defines the styling for the visualizer.
- 
- `README.md`: This file, providing information about the visualizer and its implementation.

## License
This project is licensed under the [MIT License](LICENSE).
