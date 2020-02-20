

import java.util.Scanner;
//   キーボード入力ができるようになる処理を読み込む


public class Sample04 {


    public static void main(String[] args){



        System.out.println("税込価格を計算します。消費税は何%ですか？");


        Scanner sc1 = new Scanner(System.in);
//   キーボード入力の処理を始める指示をsc1の名に代入する

        int pphTax = sc1.nextInt();
//   入力数値を税％の名に代入する


        System.out.println(pphTax + "％ですね。商品の税抜き価格はいくらですか？");


        int withoutTax = sc1.nextInt();
//   入力数値を税込み価格の名に代入する

        sc1.close();
//   キーボード入力の処理を終える指示をする


        int tax = (int)tax(pphTax, withoutTax);
//   doubleで返ってきた値をキャストして、整数にする

        System.out.println(withoutTax + "円の商品の税込価格は" + (withoutTax + tax) + "円" + "（消費税は" + tax + "円）です。");

    }


    public static double tax(int pphTax, int withoutTax){


        double result =  withoutTax * (double)pphTax / 100;

        return result;
// 	消費税の計算をして、double型で値を返す

    }


}
