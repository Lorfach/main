
import { memo } from "react";
import "./homework_page.css";

const Input = memo(({inputFunc, correct}) => {
    return(
        <>
            <input
                type="text"
                onChange={inputFunc}
                placeholder="Введите ваш ответ"
                autoComplete="off"
                className={`inpt w-full h-14 px-3 md:px-5 rounded-xl bg-[#1e1e1f] border ${correct == true ? 'border-[#00df60] corr' : (correct == false ? 'border-[#f74040] corr' : ' border-[#141417]')} transition-all outline-none text-base md:text-lg`}
            />

            {correct == true ? (
                <div className="absolute right-4">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMyAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi43NzI1IDkuNjA1MzRMMTEuNjk3MSAxNS42MDVDMTEuNDg4MiAxNS44NTIgMTEuMTY0OCAxNS45OTggMTAuODIwNCAxNkgxMC44MTI2QzEwLjQ3MTUgMTYgMTAuMTQ5MyAxNS44NTggOS45MzgyMiAxNS42MTZMNy4yMzYwOCAxMi41MDkyQzYuODU4MzEgMTIuMDc1MiA2Ljk0Mjc1IDExLjQ0NjIgNy40MjYwNyAxMS4xMDYzQzcuOTA4MjggMTAuNzY1MyA4LjYwODI2IDEwLjg0MTMgOC45ODYwMiAxMS4yNzczTDEwLjgwMDQgMTMuMzYzMUwxNS4wMDQ3IDguMzk0NDFDMTUuMzc1OCA3Ljk1NTQzIDE2LjA3MjUgNy44Njk0NCAxNi41NjI1IDguMjA0NDJDMTcuMDUwMiA4LjUzOTQgMTcuMTQ0NyA5LjE2NjM3IDE2Ljc3MjUgOS42MDUzNFpNMTEuNSAwLjVDNS4xNDg1NSAwLjUgMCA1LjY0ODU1IDAgMTJDMCAxOC4zNTAzIDUuMTQ4NTUgMjMuNSAxMS41IDIzLjVDMTcuODUxNCAyMy41IDIzIDE4LjM1MDMgMjMgMTJDMjMgNS42NDg1NSAxNy44NTE0IDAuNSAxMS41IDAuNVoiIGZpbGw9IiM0MkQyMzUiLz4KPC9zdmc+Cg==" alt="Знак выполнения"></img>
                </div>
            ) : ( correct == false ?
                <div className="absolute right-4">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTFDMCA0LjkyNDg3IDQuOTI0ODcgMCAxMSAwQzE3LjA3NTEgMCAyMiA0LjkyNDg3IDIyIDExQzIyIDE3LjA3NTEgMTcuMDc1MSAyMiAxMSAyMkM0LjkyNDg3IDIyIDAgMTcuMDc1MSAwIDExWiIgZmlsbD0iI0ZGNTk1OSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjI5NjQgMTEuMDAwMkwxNi4yMzE2IDcuMDY0OThDMTYuNTkwMSA2LjcwNjU2IDE2LjU5MDEgNi4xMjcyMyAxNi4yMzE2IDUuNzY4ODFDMTUuODczMiA1LjQxMDQgMTUuMjkzOSA1LjQxMDQgMTQuOTM1NSA1Ljc2ODgxTDExLjAwMDIgOS43MDQwNkw3LjA2NDk4IDUuNzY4ODFDNi43MDY1NiA1LjQxMDQgNi4xMjcyMyA1LjQxMDQgNS43Njg4MSA1Ljc2ODgxQzUuNDEwNCA2LjEyNzIzIDUuNDEwNCA2LjcwNjU2IDUuNzY4ODEgNy4wNjQ5OEw5LjcwNDA2IDExLjAwMDJMNS43Njg4MSAxNC45MzU1QzUuNDEwNCAxNS4yOTM5IDUuNDEwNCAxNS44NzMyIDUuNzY4ODEgMTYuMjMxNkM1Ljk0NzU2IDE2LjQxMDQgNi4xODIyMyAxNi41MDAyIDYuNDE2OSAxNi41MDAyQzYuNjUxNTYgMTYuNTAwMiA2Ljg4NjIzIDE2LjQxMDQgNy4wNjQ5OCAxNi4yMzE2TDExLjAwMDIgMTIuMjk2NEwxNC45MzU1IDE2LjIzMTZDMTUuMTE0MiAxNi40MTA0IDE1LjM0ODkgMTYuNTAwMiAxNS41ODM2IDE2LjUwMDJDMTUuODE4MiAxNi41MDAyIDE2LjA1MjkgMTYuNDEwNCAxNi4yMzE2IDE2LjIzMTZDMTYuNTkwMSAxNS44NzMyIDE2LjU5MDEgMTUuMjkzOSAxNi4yMzE2IDE0LjkzNTVMMTIuMjk2NCAxMS4wMDAyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt="Знак выполнения"></img>
                </div>
            : null)}
        </>
        
    )
});

export default Input;
