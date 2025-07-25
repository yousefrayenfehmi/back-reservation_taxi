class Voyage {
    private id: number;
    private depart: string;
    private arrivee: string;
    private prix: number;
    private nombre_passagers: number;
    constructor(id: number, depart: string, arrivee: string, prix: number, nombre_passagers: number) {
        this.id = id;
        this.depart = depart;
        this.arrivee = arrivee;
        this.prix = prix;
        this.nombre_passagers = nombre_passagers;
    }
    public getDepart(): string {
        return this.depart;
    }
    public getArrivee(): string {
        return this.arrivee;
    }
    public getPrix(): number {
        return this.prix;
    }
    public getNombrePassagers(): number {
        return this.nombre_passagers;
    }
    public setDepart(depart: string): void {
        this.depart = depart;
    }
    public setArrivee(arrivee: string): void {
        this.arrivee = arrivee;
    }
    public setPrix(prix: number): void {
        this.prix = prix;
    }
    public setNombrePassagers(nombre_passagers: number): void {
        this.nombre_passagers = nombre_passagers;
    }
    
}


export default Voyage;