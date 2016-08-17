# vscode-terminal-api-example

This repo demonstrates how to utilize the integrated terminal extension API coming in Visual Studio Code v1.5.0.

Several commands are exposed prefixed with "Terminal API" that show how to use the API:

- `Terminal API: Create Terminal`: Create a terminal
- `Terminal API: Hide`: Hides the most recently created terminal
- `Terminal API: Show`: Shows the most recently created terminal 
- `Terminal API: Send Text`: Sends `echo "Hello World!"` to the terminal
- `Terminal API: Send Text (no implied \n)`: Sends `echo "Hello World!"` to the terminal explicitly indicating to not add a `\n` to the end of the text
- `Terminal API: Dispose"`: Disposes the most recently created terminal
