export type Category = 'history' | 'sports' | 'arts' | 'science'

export interface Data {
    id: number
    title: string
    question: string
    category: Category
    goodResponse: string
    badResponse: string
}

export const categoryColors: Record<Category, string> = {
    history: '#FFD700',
    sports: '#32CD32',
    arts: '#FF69B4',
    science: '#1E90FF',
}

export const getTextSeed = (text: string) => {
    let hash = 0
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash)
    }
    return hash
}

export const getRandomRotationFromText = (text: string) => {
    const seed = getTextSeed(text)
    // Use seed to get a pseudo-random value between -10 and 10
    return ((Math.abs(seed) % 21) - 10)
}