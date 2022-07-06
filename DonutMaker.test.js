import DonutMaker from "./DonutMaker";

describe("DonutMaker", ()=>{
    test("should be able to add a donut and retrieve the total count", () =>{
        //arrange
        const underTest = new DonutMaker(0,0,0);
        //act
        underTest.addDonut();
        //assert
        expect(underTest.numDonuts).toEqual(1);

    });

    test("should be able to add an autoclicker with 100 donuts", () =>{
        //arrange
        const underTest = new DonutMaker(100, 0);
        //act
        underTest.addAutoclicker();
        //assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoclickers).toEqual(1);
    });
    
    test("should NOT be able to purchase an autoclicker with 99 donuts", () => {
        //arrange
        const underTest = new DonutMaker (99, 0);
        //act
        underTest.addAutoclicker();
        //assert
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoclickers).toEqual(0);

    })
    test("should count number of autoclickers", ()=> {
        //Arrange
        const underTest = new DonutMaker(500, 1, 0);
    
        //ACt
        underTest.addAutoclicker();
                //Assert
        expect(underTest.numAutoclickers).toEqual(2);
        expect(underTest.numDonuts).toEqual(390);
       



    
    })


});
