/**
* 이 파일을 사용해, 만든 함수와 블록들을 정의해두세요.
* 다음에서 더 살펴보기: https://makecode.microbit.org/blocks/custom
*/


enum antioxidant {
    //% block="하나"
    One,
    //% block="둘"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
//const 상수처리 let 변수선언


//% blockNamespace=plant
namespace plant {
    /**
     * Set plant parameters.
     * @param name The name of the plant.
     * @param exposureTime The UV exposure time for the plant.
     */
    //% block="식물 매개 변수 설정 | 이름: $name| 노출 시간: $exposureTime"
    export function setPlantParameters(name: string, exposureTime: number): void {
        // Add code here to set plant parameters
    }
    /**
     * Set plant parameters.
     * @param name The name of the plant.
     * @param exposureTime The UV exposure time for the plant.
     */
    //% block="흡광도 값 설정"
    export function num(): number {
        return 10
    }


}
//% blockNamespace=plantData
namespace plantData {
    /**
     * Stores the antioxidant content data of a plant.
     * @param plantName The name of the plant.
     * @param antioxidantContent The antioxidant content data to store.
     */
    //% block="식물의 항산화물질 함량 데이터 저장 | 이름: $plantName| 함량: $antioxidantContent"
    export function storeAntioxidantData(plantName: string, antioxidantContent: number): void {
        // Internal code to store antioxidant data
    }

    /**
     * Stores the absorption data of a plant.
     * @param plantName The name of the plant.
     * @param absorptionData The absorption data to store.
     */
    //% block="식물의 흡수 데이터 저장 | 이름: $plantName| 흡수 데이터: $absorptionData"
    export function storeAbsorptionData(plantName: string, absorptionData: number): void {
        // Internal code to store absorption data
    }
}

//% weight=5
namespace 출력데이터 {
    /**
     * 항산화 물질 함량 결과값을 출력합니다.
     * @param antioxidantContent 항산화 물질 함량
     */
    //% block="항산화 물질 함량 출력: $antioxidantContent"
    export function 항산화물질출력(antioxidantContent: number): void {
        basic.showString("항산화 물질: " + antioxidantContent);
    }

    /**
     * 항산화 물질 함량을 표현할 수 있는 그래프를 표시합니다.
     * @param antioxidantContent 항산화 물질 함량
     */
    //% block="항산화 물질 함량 그래프 표시: $antioxidantContent"
    export function 항산화물질그래프표시(antioxidantContent: number): void {
        led.plotBarGraph(antioxidantContent, 255);
    }

    /**
     * 시리얼 통신을 활용하여 항산화 물질 함량 결과값을 출력합니다.
     * @param antioxidantContent 항산화 물질 함량
     */
    //% block="시리얼 통신으로 항산화 물질 함량 출력: $antioxidantContent"
    export function 항산화물질출력시리얼(antioxidantContent: number): void {
        serial.writeValue("Antioxidant", antioxidantContent);
    }
}
