import { k, addGeneralGameLogic } from "../game.js"
import { generateCastleRPG } from "../map.js"
import { loadKeyboardRPG } from "../keyboard.js"

import "./finish.js"

/**
 * Szene für das Level 4.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-04", async () => {
  k.setGravity(0)
  loadKeyboardRPG()
  console.log("ok")
  await generateCastleRPG("maps/level-04.txt")
  console.log("not ok")
  addGeneralGameLogic()

  k.onCollide("player", "cave", (player) => {
    if (player.hasFlower === true) {
      k.go("finish")
    }
  })

  k.onCollide("player", "flower", (player, flower) => {
    flower.destroy()
    player.hasFlower = true
  })
})
