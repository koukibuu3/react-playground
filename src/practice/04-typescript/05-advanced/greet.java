public class Main {
  public static void main (String args[]) {
    greet();
    greet("usagi");
  }

  static void greet() {
    System.out.println("Hello!");
  }

  static void greet(String name) {
    System.out.println("Hi, " + name + "!");
  }
}
