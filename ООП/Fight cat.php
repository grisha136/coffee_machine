<?php

class Cat {
    public $age;
    public $weight;
    public $strength;
    
    function __construct() {
    }
    
    function fight($anotherCat) {
        $score = 0;
        $ageAdvantage = $this->age > $anotherCat->age? 1 : 0;
        $weightAdvantage = $this->weight > $anotherCat->weight? 1 : 0;
        $strengthAdvantage = $this->strength > $anotherCat->strength? 1 : 0;
        $score = $ageAdvantage + $weightAdvantage + $strengthAdvantage;
        return $score > 2? true : false;
      }
    }
    
    $cat1 = new Cat();
    $cat1->age = 8;
    $cat1->weight = 8;
    $cat1->strength = 8;
    $cat2 = new Cat();
    $cat2->age = 4;
    $cat2->weight = 4;
    $cat2->strength = 4;
    $result = $cat1->fight($cat2);
    echo $result?"Winner Cat1":"Winner Cat2";
?>
