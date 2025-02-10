export default interface ProyectInterface{
    id: number;
    name: string;
    description: string;
    date: string;
    section_id: number;
    header_img: string;
    images: string[];
    size?: number;
}