<?

abstract class Animal{
  private $nickname;
  private $age;
  private $breed;
  function __construct($nick,$age,$breed){
    $this->nickname = $nick;
    $this->age = $age;
    $this->breed = $breed;
  }
  function getNickname(){return $this->nickname;}
  function getAge(){return $this->age;}
  function getBreed(){return $this->breed;}
}

class Horse extends Animal {
    function run(){
    echo $this-> getNickname()." Игого, я поскакал(а). ";
   }
}

class Pegasus extends Horse {
    function fly(){
    echo $this-> getNickname()." Игого, я полетел(а). ";
  }
}

$bars = new Horse("Bars",4,null);
$bars-> run();
$kesha = new Pegasus("Kesha",5,null);
$kesha-> fly();
?>
