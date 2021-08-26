import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mainFB } from './firebase'
import Page404 from "./Page404";
import { browserName as browser, osName as OS } from "react-device-detect";

const Main = () => {
    const { keyID } = useParams();
    const [valid, setValid] = useState(true)

    useEffect(() => {

        mainFB.ref('link/' + keyID).once('value', (snapshot) => {

            const data = snapshot.val()

            if (snapshot.exists()) {

                mainFB.ref('link/' + keyID).update({
                    ...data,
                    count: data.count + 1,
                    Browser: {
                        ...data.Browser,
                        [browser]: browser in data.Browser ? data.Browser[browser] + 1 : 1

                    },
                    OS: {
                        ...data.OS,
                        [OS]: OS in data.OS ? data.OS[OS] + 1 : 1

                    }
                })

                window.open(data.url, '_top')

            } else {
                setValid(false)
            }
        })
    })

    return (<>
        {valid ? "Rediecting..." : <Page404 />}
    </>)
}

export default Main;