# Gravexa hackathon submission copy

## Project description

My project is **Gravexa**, an interactive learning website about asteroid close approaches. It helps students and general visitors see how distance, speed, direction, uncertainty, and asteroid size can change a simple local model. Visitors can use presets, move sliders, compare two runs, and read the result in clear language. Gravexa is a learning tool. It is not a real asteroid collision predictor.

## The Issue

Asteroid close-approach information can be hard to understand. Real space data includes paths, uncertainty, speed, and distance. A single number can appear exact when the reader does not know what affects it. Students and the general public need a simple visual way to explore these ideas without confusing a learning model with an official prediction.

## Our Magic Solution

Gravexa turns a close approach into an interactive experiment. A visitor can start with a preset or move one slider at a time. The main view shows Earth, an asteroid, its path, the closest point, and an uncertainty corridor. The local result updates with the selected values. A 2D fallback keeps the lesson available when 3D graphics are unavailable. An optional JPL panel shows real reference data separately from the local model. An optional Groq explanation describes the current local result in plain English. IBM Bob was the primary development tool for this project.
