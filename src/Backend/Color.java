import Color;

public class Paint {
    public class rgb {
        public int red;
        public int green;
        public int blue;

        public rgb(int red, int green, int blue) {
            this.red = red.;
            this.green = green;
            this.blue = blue;
        }
    }

    public rgb rgb1;
    public rgb rgb2;

    public Paint(rgb1 rgb, rgb2, rgb) {
        this.rgb1 = rgb1;
        this.rgb2 = rgb2;
    }

    public int getIntFromColor(int red, int grenn, int blue){
        red = (red << 16) & 0x00FF0000;
        green = (green << 8) & 0x0000FF00;
        blue = blue & 0x000000FF;

        return 0xFF000000 | Red | Green | Blue;
    }

    public string stringColor(Color color) {
        return String.format("#%06x", color.getRGB() & 0x00FFFFFF);
    }

    public boolean needWhite(rgb1 rgb, rgb2, rgb) {
        if (rgb1.blue < rgb2.blue && rgb1.green  && rgb2.green && rgb1.red < rgb2.red) {
            return true;
        } else return false;
    }

    // +104 means good amount of white must be added, any less then its a small quantity
    public int magnitudeWhite(rgb1 rgb, rgb2 rgb) {
        int magWhite = (rgb2.blue - rgb1.blue + rgb2.red - rgb1.red + rgb2.green - rgb1.green);
        if (magWhite <= -104) return -2;
        else if (magWhite < 0 && magWhite > -104) return -1;
        else if (magWhite >= 0 && magWhite < 104) return 1;
        else return 2;
    }

    public int magRed(rgb1 rgb, rgb2 rgb) {
        if (rb2.red - rgb1.red > 70 || (rgb2.blue - rgb1.blue + rgb2.green - rgb1.green) > 40) return 1;
        else if (rgb2.blue - rgb1.blue + rgb2.green - rgb1.green) > 102) return 2;
        else return 0;
    }

    public int magBlue(rgb1 rgb, rgb2 rgb) {
        if (rb2.blue - rgb1.blue > 70 || (rgb2.red - rgb1.red + rgb2.green - rgb1.green) > 40) return 1;
        else if (rgb2.red - rgb1.red + rgb2.green - rgb1.green) > 102) return 2;
        else return 0;
    }

    public int magYellow(rgb1 rgb, rgb2 rgb) {
        if (rb2.green - rgb1.green > 0 || (rgb2.red - rgb1.red + rgb2.blue - rgb1.blue) > 40) return 1;
        else if (rgb2.red - rgb1.red + rgb2.blue - rgb1.blue) > 102) return 2;
        else return 0;
    }

    public String colorNeeded(rgb1 rgb, rgb2 rgb) {
        String output = "";
        if (magnitudeWhite(rgb1, rgb2) == 2) output += "Add lots of white";
        else if (magnitudeWhite(rgb1, rgb2) == 1) output += "Add a little white";
        else if (magnitudeWhite(rgb1, rgb2) == -2) output += "Add some black";
        else output += "Add a little black";
        int yellow = magYellow(rgb1, rgb2);
        int blue = magBlue(rgb1, rgb2);
        int red = magRed(rgb1, rgb2);
        if (yellow == 2) return output += " and a lot of yellow";
        else if (yellow == 1) return output += " and some yellow";
        else if (red == 2) return output += " and some red";
        else if (blue == 2) return output += " and some blue;
        else if (red == 1) return output += " and a little red";
        else if (blue == 1) return output += " and a very small amount of blue";
        else return output;
    }
}