'use strict';
// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let terminalStack = [];

    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.createTerminal', () => {
        (<any>vscode.window).createTerminal(`Ext Terminal #${terminalStack.length + 1}`).then((t) => {
            terminalStack.push(t);
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.hide', () => {
        if (terminalStack.length === 0) {
            vscode.window.showErrorMessage('No active terminals');
        }
        getLatestTerminal().hide();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.show', () => {
        if (terminalStack.length === 0) {
            vscode.window.showErrorMessage('No active terminals');
        }
        getLatestTerminal().show();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.sendText', () => {
        if (terminalStack.length === 0) {
            vscode.window.showErrorMessage('No active terminals');
        }
        getLatestTerminal().sendText("echo \"Hello world!\"");
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.sendTextNoNewLine', () => {
        if (terminalStack.length === 0) {
            vscode.window.showErrorMessage('No active terminals');
        }
        getLatestTerminal().sendText("echo \"Hello world!\"", false);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.dispose', () => {
        if (terminalStack.length === 0) {
            vscode.window.showErrorMessage('No active terminals');
        }
        getLatestTerminal().dispose().then(() => {
            terminalStack.pop();
        });
    }));

    function getLatestTerminal() {
        return terminalStack[terminalStack.length - 1];
    }
}

export function deactivate() {
}