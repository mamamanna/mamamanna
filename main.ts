let 최적화된_값 = 0
let 흡광도값 = 0
let 노출시간 = 0
plant.setPlantParameters("onion", 노출시간)
노출시간 = 5
plantData.storeAbsorptionData("onion_b", 흡광도값)
plantData.storeAntioxidantData("onion_a", 0)
if (흡광도값 > 최적화된_값) {
    최적화된_값 = 흡광도값
}
출력데이터.항산화물질그래프표시(0)
