package fingertoolkit;

public class FingerScanner {
    //private FingerprintMatcher matcher;
    private int sizeDpi = 500;

    public FingerScanner() {
        //matcher = new FingerprintMatcher();
    }

    public static String findFingerInDatabase(byte[] imageBytes) {
        //FingerprintTemplate source = new FingerprintTemplate(imageBytes);
        return new String(imageBytes);  
     }
    public void SetDpi(int dpiSizeValue){
        this.sizeDpi=dpiSizeValue;
    }

}