/**
 * Höhere Gewalt
 * Copyright (c) 2026 René Coignard
 */

setcpm(37.5)

const bass = note(`<f2!12 e2!12 cs2!12 e2!12>`).struct("<t ~ ~>")

const chord = note(`<
  [f3,gs3,c4]!12
  [gs3,b3,ds4]!12
  [gs3,cs4,f4]!12
  [gs3,b3,ds4]!12
>`).struct("<~ [t!3 ~!13] ~>").clip(1/2)

const pulse = note(`<
  [f4,gs4,c5]*8!12
  [gs4,b4,ds5]*8!12
  [gs4,cs5,f5]*8!12
  [gs4,b4,ds5]*8!12
>`).clip(1/16)

const arp = note(`<
  [f5 c5 gs4 c5]*4!12
  [e5 b4 gs4 b4]*4!12
  [f5 cs5 gs4 cs5]*4!12
  [e5 b4 gs4 b4]*4!12
>`).clip(1/4)

arrange(
  [48, stack(bass.midichan(3), chord.midichan(3), chord.midichan(5))],
  [48, stack(bass.midichan(5), chord.midichan(5), pulse.midichan(1))],
  [96, stack(bass.midichan(5), chord.midichan(5), pulse.midichan(1), arp.midichan(2))],
).midi('IAC Driver Sweelinq')
