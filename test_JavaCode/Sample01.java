import java.io.*;

class Sample01{
  public static void main(String[] args) throws IOException{

    System.out.println("好きな数字と嫌いな数字を打ってみてよね");

    BufferedReader br =
      new BufferedReader(new InputStreamReader(System.in));

    String suki = br.readLine();
    String kirai = br.readLine();

    int love = Integer.parseInt(suki);
    int hate = Integer.parseInt(kirai);

    System.out.println("あなたの好きな数字は" + love + "なのねぇ\n");
    System.out.println("そして嫌いな数字は" + hate + "とはねぇ…");
  }
}
