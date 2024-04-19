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
<<<<<<< HEAD
  k.add([
    //background einfügung
    k.sprite("background_castle", { width: k.width(), height: k.height() }),
    k.pos(0, 0),
    k.fixed(),
    k.z(-100),
  ])

  k.camScale(2)
=======
  k.camScale(0.75)
>>>>>>> 151d8c52c0ebf6e51a4397a737bd4bb24f9fda47
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
