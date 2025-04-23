







export const Footer=()=>{


    return(
        <>
        <hr />
<div className="footer ">
    <ul className="pInfo flex  align-middle justify-around  flex-col sm:flex-row p-10 text-center sm:text-left">
        <li className="p-3">
            <h3 className="font-semibold">Phone</h3>
            <p>7008068123</p>
        </li>
        <li className="p-3">
        <h3 className="font-semibold">Email</h3>
        <p>kisandash199@gmail.com</p>
        </li>
        <li className="p-3">
        <h3 className="font-semibold">Github</h3>
        <a href="https://github.com/kisan010" target="_blank">{"https://github.com/kisan010"}</a>
        </li>
        <li className="p-3">
        <h3 className="font-semibold">© {new Date().getFullYear()} by Kisan Dash</h3>
        
        </li>
    </ul>
</div>

        </>
    )
}