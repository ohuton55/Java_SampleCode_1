
public class Clock {

    public static void main(String[] args) {


        int hour = 18;
        int minute = 32;
        int second = 47;

        int result = getSeconds(hour, minute, second);

        System.out.println("一日の中での経過時間は" + result + "秒だよ～");


    }

    public static int getSeconds(int hour, int minute, int second){

        int result_hour = hour * 60 * 60;  /*  １時間を60分×60秒とする  */
        int result_minute = minute * 60;   /* 1分を60秒とする */

        int result = result_hour + result_minute + second;  /* 全てを足す */

        return result;  /* 結果を返す */

    }


}
