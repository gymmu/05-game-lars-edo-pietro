import { k, addGeneralGameLogic } from "../game.js"
import { generateKerker } from "../map.js"
import { loadKeyboardRPG } from "../keyboard.js"

import "./finish.js"
import "./lose.js"

/**
 * Szene für das Level 4.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-04", async () => {
  k.camScale(0.75)
  k.setGravity(0)
  loadKeyboardRPG()
  console.log("ok")
  await generateKerker("maps/level-04.txt")
  console.log("not ok")
  addGeneralGameLogic()

  k.onCollide("player", "castle", (player) => {
    if (player.hasFlower === true) {
      k.go("finish")
    }
  })

  k.onCollide("player", "rose", (player, flower) => {
    flower.destroy()
    player.hasFlower = true
  })
})
