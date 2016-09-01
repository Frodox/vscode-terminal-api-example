'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let terminalStack = [];

    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.createTerminal', () => {
        terminalStack.push((<any>vscode.window).createTerminal(`Ext Terminal #${terminalStack.length + 1}`));
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
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.showPreserveFocus', () => {
        if (terminalStack.length === 0) {
            vscode.window.showErrorMessage('No active terminals');
        }
        getLatestTerminal().show(true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.sendText', () => {
        if (terminalStack.length === 0) {
            vscode.window.showErrorMessage('No active terminals');
        }
        getLatestTerminal().sendText("echo 'Hello world!'");
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.sendTextNoNewLine', () => {
        if (terminalStack.length === 0) {
            vscode.window.showErrorMessage('No active terminals');
        }
        getLatestTerminal().sendText("echo 'Hello world!'", false);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.dispose', () => {
        if (terminalStack.length === 0) {
            vscode.window.showErrorMessage('No active terminals');
        }
        getLatestTerminal().dispose();
        terminalStack.pop();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminalTest.createAndSend', () => {
        terminalStack.push((<any>vscode.window).createTerminal(`Ext Terminal #${terminalStack.length + 1}`));
        getLatestTerminal().sendText("echo 'Sent text immediately after creating'");
    }));

    function getLatestTerminal() {
        return terminalStack[terminalStack.length - 1];
    }
}

export function deactivate() {
}