class Person {
  String name;
  int age;
  String address;
//変数を定義する　Stringは文字列、intは変数


  Person(String _name, int _age, String _address){
    name = _name;
    age = _age;
    address = _address;
  }
//コンストラクタ　インスタンス化時に自動で呼び出される。　クラス名と同じ名前のメソッドを決める
//_name,_age,_addressは仮引数。　データ型と変数名を書く。　

}

class PersonTest {
  public static void main(String[] args){
    Person taro = new Person("太郎",21,"東京都港区");　//実引数（　,  ,  ）//
    System.out.println("名前:" + taro.name
    + " 年齢:" + taro.age + "  住所:" + taro.address);
// newで実体化する　

    Person hanako = new Person("花子",18,"北海道札幌市");
    System.out.println("名前：" + hanako.name
    + "　年齢：" + hanako.age + "　住所：" + hanako.address);
  }
}
