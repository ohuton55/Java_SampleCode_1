
public class triangle {

    public static void main(String[] args) {


        int a = 10;
        int b = 5;
        int c = 5;

        if (a != b && b != c && c != a){
            System.out.println("不等変三角形");
        } else if  (a == b && b == c && c ==a){
            System.out.println("正三角形");
        } else {
            System.out.println("二等辺三角形");
        }

    }

}
