import { Switch } from "@/components/ui/switch"

function ToggleTheme({ switchTheme }) {
    return (
        <div className="">
            <button onClick={switchTheme} className="">
                <Switch />
            </button>
        </div>
    );
}

export default ToggleTheme;
