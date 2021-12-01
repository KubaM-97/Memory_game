import { removeClassActive } from "."

export function menuMouseNavigation(menuButton: HTMLButtonElement): void {
    removeClassActive();
    menuButton?.classList.add("active")
}