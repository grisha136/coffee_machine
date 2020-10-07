<?php
header('Content-type: text/html; charset=utf-8');
class Person{
  private $name;
  private $lasname;
  private $age;
  private $mother;
  private $father;
  function __construct($name,$lastname,$age,$mother=null,$father=null){
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
  }
  public function getName(){return $this->name;}
  public function getLastame(){return $this->lastname;}
  public function getAge(){return $this->age;}
  public function getMother(){return $this->mother;}
  public function getFather(){return $this->father;}
  public function getInfo(){
     return "
     Меня зовут: ".$this->name."<br>
     Мою маму зовут: ".$this->getMother()->getName()."<br>
     Папу моей мамы зовут: ".$this->getMother()->getFather()->getName()."<br>
     Маму моей мамы зовут: ".$this->getMother()->getMother()->getName()."<br>
     Моего папу зовут: ".$this->getFather()->getName()."<br>
     Папу моего папы зовут: ".$this->getFather()->getFather()->getName()."<br>
     Маму моего папы зовут: ".$this->getFather()->getMother()->getName();
  }
}
$ksenya = new Person("Ксения","Петрова", 61);
$nikolay = new Person("Николай","Петров", 61);
$anna = new Person("Анна","Викторова", 62);
$petr = new Person("Петр","Викторов", 62);
$oleg = new Person("Олег","Петров", 41);
$olga = new Person("Ольга","Петрова", 41);
$oleg = new Person("Олег","Петров", 41, $ksenya, $nikolay);
$olga = new Person("Ольга","Петрова", 41, $anna , $petr);
$igor = new Person("Игорь","Петров", 11, $olga, $oleg);
echo $igor->getInfo();
?>
