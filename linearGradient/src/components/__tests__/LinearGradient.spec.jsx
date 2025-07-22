import { LinearGradient } from "../../LinearGradient";
import { Platform } from "react-native";
import { createElement } from "react";
import { shallow } from "enzyme";

describe.each(["ios", "android"])("LinearGradient for %s", os => {
    beforeEach(() => {
        Platform.OS = os;
        Platform.select = jest.fn(dict => dict[Platform.OS]);
    });

    it("renders the structure correctly", () => {
        const lineargradientProps = {
            name: "Mendix",
            style: []
        };
        const lineargradient = shallow(<LinearGradient {...lineargradientProps} />);

        expect(lineargradient).toMatchSnapshot();
    });

    it("renders the structure correctly with custom style", () => {
        const lineargradientProps = {
            name: "Mendix",
            style: [{ container: { borderColor: "white" }, label: { color: "black" } }]
        };
        const lineargradient = shallow(<LinearGradient {...lineargradientProps} />);

        expect(lineargradient).toMatchSnapshot();
    });
});
