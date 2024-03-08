import { k } from "./game.js"
import { TILESIZE } from "./globals.js"
import { getPlayer } from "./player.js"

/**
 * Diese Funktion lädt die Tastenbelegung wie sie pro Level sein soll. Die
 * generelle Steuerung für ein Jump'n'Run-Level ist immer etwa gleich, deshalb
 * laden wir sie hier in einer eigenen Funktion.
 */
export function loadKeyboardJumpAndRun() {
  const player = getPlayer()
  // Wenn die Taste gedrückt wird, dann soll die Animation abgespielt werden.
  k.onKeyPress("a", () => {
    player.play("runLeft")
  })
  // Solange wie die Taste gedrückt wird, wird der Spieler in jedem Frame nach
  // links verschoben.
  k.onKeyDown("a", () => {
    player.move(k.LEFT.scale(player.speed))
  })
  // Wenn die Taste losgelassen wird, wird die idleAnimation abgespielt.
  k.onKeyRelease("a", () => {
    player.play("idleLeft")
  })

  k.onKeyPress("d", () => {
    player.play("runRight")
  })
  k.onKeyDown("d", () => {
    player.move(k.RIGHT.scale(player.speed))
  })
  k.onKeyRelease("d", () => {
    player.play("idleRight")
  })

  k.onKeyPress("space", () => {
    player.jump()
  })
}

/**
 * Diese Funktion lädt die Tastenbelegung wie sie pro Level sein soll. Die
 * generelle Steuerung für ein RPG-Level ist immer etwa gleich, deshalb
 * laden wir sie hier in einer eigenen Funktion.
 *
 * Da wir uns hier anders bewegen können wie in einem Jump'n'Run, haben wir
 * extra eine weitere Funktion erstellt, wo all diese Funktionen drin sind, wie
 * zum Beispiel nach oben oder unten laufen.
 */
export function loadKeyboardRPG() {
  const player = getPlayer()
  k.onKeyPress("a", () => {
    player.play("runLeft")
  })
  k.onKeyDown("a", () => {
    player.move(k.LEFT.scale(player.speed))
  })
  k.onKeyRelease("a", () => {
    player.play("idleLeft")
  })

  k.onKeyPress("d", () => {
    player.play("runRight")
  })
  k.onKeyDown("d", () => {
    player.move(k.RIGHT.scale(player.speed))
  })
  k.onKeyRelease("d", () => {
    player.play("idleRight")
  })

  k.onKeyPress("w", () => {
    player.play("runUp")
  })
  k.onKeyDown("w", () => {
    player.move(k.UP.scale(player.speed))
  })
  k.onKeyRelease("w", () => {
    player.play("idleUp")
  })

  k.onKeyPress("s", () => {
    player.play("runDown")
  })
  k.onKeyDown("s", () => {
    player.move(k.DOWN.scale(player.speed))
  })
  k.onKeyRelease("s", () => {
    player.play("idleDown")
  })
}

k.onKeyPress("e", () => {
  const pos = player.pos
  k.add([
    k.sprite("stone"),
    k.pos(pos.x + TILESIZE, pos.y),
    k.area(),
    k.move(k.RIGHT, 300),
    "projectile",
  ])
})
