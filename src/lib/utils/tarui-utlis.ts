export * from "../constant/tauri-constant"
export * from "../hooks/use-swr-tauri"

import { invoke, InvokeArgs, InvokeOptions } from "@tauri-apps/api/core";
import { Is_Tauri } from "../../AppEnv";

export type Tauri_Command = "set_config" | "get_config";

export async function Invoke_Command<T>(command : Tauri_Command, args? : InvokeArgs, options? : InvokeOptions) : Promise<T | undefined>
{
    if(!Is_Tauri)
        return undefined;

    try {
        var result = await invoke<T>(command as string, args, options)
        return result;
    }
    catch (e) {
        console.log("Tauri Invoke Error: " + command);
        return undefined;
    }
}

export async function Invoke_Deault<T>(command: Tauri_Command, defaultValue : T, args?: InvokeArgs, options?: InvokeOptions) : Promise<T>
{
    return await Invoke_Command<T>(command, args, options) ?? defaultValue;
}

export async function Invoke<T>(command: string, args?: InvokeArgs, options?: InvokeOptions) : Promise<T | undefined>
{
    var cmd = command as Tauri_Command;
    if (!cmd)
        return undefined;

    return await Invoke_Command<T>(cmd, args, options)
}