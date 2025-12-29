import { Award, Heart, MessageCircle, Sparkles } from "lucide-react"

type dataType={
    text:string
    name:string
    occupation:string

}

export const data:dataType[] = [
    {
        text:"Absolutely stunning. Every page is pure magic. Sarah Chen has created something truly special that will stay with readers forever.",
        name:"Jessica Martinez",
        occupation:"Book Blogger"
    },
    {
        text:"A modern classic. The prose is exquisite, the story unforgettable. This is storytelling at its absolute finest.",
        name:"Michael Roberts",
        occupation:"Literature Professor"
    },
    {
        text:"I laughed, I cried, I believed in magic again. The Midnight Garden is a treasure that speaks directly to the heart.",
        name:"Amanda Kim",
        occupation:"Avid Reader"
    },
]

export const categories=[
    {
        header: "Deeply Moving",
        text: "Characters and emotions that resonate long after the final page",
        icon: Heart
    },
    {
        header: "Magical Realism",
        text:"A perfect blend of reality and enchantment that captivates",
        icon: Sparkles
    },
    {
        header: "Book Club Ready",
        text:"Rich themes and questions perfect for deep discussions",
        icon: MessageCircle
    },
    {
        header: "Award Winner",
        text:"Recognized by critics and beloved by readers worldwide",
        icon: Award
    },
]