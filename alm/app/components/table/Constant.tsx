import Image from "next/image"
export const tableData = [
    {
        check: <input type="checkbox" />, name: "Staff Doc", date: "23,Aug,2023",
        created_by: "Chika Obi", folder: "finished",
        recipient: { src1: "/images/bx-file.svg", src2: "/images/bx-file.svg", src3: "/images/bx-file.svg" },
        status: { src: "/images/bxs-file.svg", color: "red-500", type: "Expired" },

    },
    {
        check: <input type="checkbox" />, name: "Staff Doc", date: "23,Aug,2023",
        created_by: "Chika Obi [you]", folder: "finished",
        recipient: { src1: "/images/bx-file.svg", src2: "/images/bx-file.svg", src3: "/images/bx-file.svg" },
        status: { src: "/images/bxs-file.svg", color: "red-500", type: "Pending" },

    },
    {
        check: <input type="checkbox" />, name: "Staff Doc", date: "23,Aug,2023",
        created_by: "Chika Obi", folder: "finished",
        recipient: { src1: "/images/bx-file.svg", src2: "/images/bx-file.svg", src3: "/images/bx-file.svg" },
        status: { src: "/images/bxs-file.svg", color: "red-500", type: "Signed" },

    },
    {
        check: <input type="checkbox" />, name: "Staff Doc", date: "23,Aug,2023",
        created_by: "Chika Obi[you]", folder: "finished",
        recipient: { src1: "/images/bx-file.svg", src2: "/images/bx-file.svg", src3: "/images/bx-file.svg" },
        status: { src: "/images/bxs-file.svg", color: "red-500", type: "Rejected" },

    }
]