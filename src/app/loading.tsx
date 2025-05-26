import Image from "next/image";
import loading from "@/assets/loading.gif"

const Loading = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            justifyContent: "center"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",

            }}>
                <Image
                    src={loading}
                    alt="Loading"
                    width={500}
                    height={500}
                />
                Loading...
            </div>

        </div>
    );
}

export default Loading;