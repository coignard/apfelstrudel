setcpm(32)

const S = 'IAC Driver Sweelinq'
const key = "D3:aeolian"
const harm = "<0 6 5 4>/2"

$: "0/2".add(-7).scale(key).note()
.legato(1).gain(.9).midichan(5).midi(S)

$: harm.add("0,2,4").scale(key).note()
.legato(1).gain(.5).midichan(2).midi(S)

$: "[4 2 0 2 4 5 4 2]".add(harm).add(7).scale(key).note()
.clip(.7).gain(.78).midichan(1).midi(S)

$: "[4 2 0 2 4 5 4 2]*2".add(harm).add(7).scale(key).note()
.clip(.7).gain(.78).midichan(2).midi(S)
