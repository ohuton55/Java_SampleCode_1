import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class IndexQuiz {

    public static void main(String[] args){




        ArrayList<Integer> list = new ArrayList<Integer>();

//		listに値を入れる。この段階では昇順
        for (int i = 0; i <= 10; i++){
            list.add(new Integer(i));
        }

//		シャッフルして順番を変える
        Collections.shuffle(list);

//		シャッフルした結果を表示させる
        System.out.println("問題です！2の『" + list.get(1) + "乗』は？");

        int num = list.get(1);
        int result = 1;

        for (num = list.get(1) ; num > 0 ; num--){

            result *= 2;
        }

        System.out.println("答えを打ってみて～");

        Scanner sc1 = new Scanner(System.in);

        int answer = sc1.nextInt();

        if (answer == result){

            System.out.println("正解！:)");

        }else{
            System.out.println("不正解……正しくは" + result + "だよ！" );
        }

        sc1.close();

        }


}
