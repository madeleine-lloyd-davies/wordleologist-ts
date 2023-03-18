// WORDLE LOGIC

// COLOR LOGIC

type ColorChannelValue = number & {
    // an int
    // 0 <= n <= 255
}

type ProportionValue = number & {
    // a float
    // 0 <= n <= 1
}

type HexNumberString = string & {

}

class Color {
    r: ColorChannelValue;
    g: ColorChannelValue;
    b: ColorChannelValue;

    constructor(red: ColorChannelValue, green: ColorChannelValue, blue: ColorChannelValue) {
        this.r = red;
        this.g = green;
        this.b = blue;
    }

    channels = () => {
        return [this.r, this.g, this.b];
    }

    asHexString = (): HexNumberString => {
        let hex = "#";
        for (const channel of [this.r, this.g, this.b]) {
            hex.concat(channel.toString(16).toUpperCase().padStart(2, "0"))
        };
        return hex;
    }

    newFromHex = (hex: HexNumberString): Color => {
        const red = parseInt(hex.slice(1, 3), 16);
        const green = parseInt(hex.slice(3, 5), 16);
        const blue = parseInt(hex.slice(5, 7), 16);
        return new Color(red, green, blue);
    }
}


class ColorGradient {
    min: number;
    max: number;
    min_color: Color;
    max_color: Color;

    constructor(
        min: number = 0,
        max: number = 100,
        min_color: Color = new Color(0, 0, 0),
        max_color: Color = new Color(255, 255, 255),
    ) {
        this.min = min;
        this.max = max;
        this.min_color = min_color;
        this.max_color = max_color;
    }

    colorFromPosition = (pos: ProportionValue): Color => {
        let channel_pairs: [ColorChannelValue, ColorChannelValue][] = new Array();
        for (let i = 0; i < 3; i++) {
            channel_pairs.push([this.min_color.channels[i], this.max_color.channels[i]])
        }
        let out_channels: [ColorChannelValue, ColorChannelValue, ColorChannelValue] = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
            const [ min, max ] = channel_pairs[i];
            out_channels.push(Math.trunc(min + pos * (max - min)));
        }
        return new Color(...out_channels);        
    }

    colorFromNumber = (num: number): Color => {
        //
    }
}