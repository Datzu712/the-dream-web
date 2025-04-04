// Tipos de datos
export interface Booking {
    id: string;
    cabinId: string;
    cabinName: string;
    customerId: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    startDate: string;
    endDate: string;
    nights: number;
    guests: number;
    totalAmount: number;
    status: 'Confirmada' | 'Pendiente' | 'Cancelada';
    paymentMethod: string;
    paymentStatus: string;
    observations?: string;
}

// Datos mock para reservas
export const mockBookings: Booking[] = [
    {
        id: '1001',
        cabinId: '1',
        cabinName: 'Cabaña Pino',
        customerId: 'c1',
        customerName: 'Carlos Rodríguez',
        customerEmail: 'carlos@ejemplo.com',
        customerPhone: '+34 612 345 678',
        startDate: '2025-03-12',
        endDate: '2025-03-15',
        nights: 3,
        guests: 2,
        totalAmount: 350,
        status: 'Confirmada',
        paymentMethod: 'Tarjeta de crédito',
        paymentStatus: 'Pagado',
        observations: 'Llegada tardía, después de las 20:00h.',
    },
    {
        id: '1002',
        cabinId: '2',
        cabinName: 'Cabaña Lago',
        customerId: 'c2',
        customerName: 'María González',
        customerEmail: 'maria@ejemplo.com',
        customerPhone: '+34 623 456 789',
        startDate: '2025-03-15',
        endDate: '2025-03-20',
        nights: 5,
        guests: 4,
        totalAmount: 750,
        status: 'Confirmada',
        paymentMethod: 'Transferencia bancaria',
        paymentStatus: 'Pagado',
    },
    {
        id: '1003',
        cabinId: '3',
        cabinName: 'Cabaña Montaña',
        customerId: 'c3',
        customerName: 'Juan Pérez',
        customerEmail: 'juan@ejemplo.com',
        customerPhone: '+34 634 567 890',
        startDate: '2025-03-18',
        endDate: '2025-03-22',
        nights: 4,
        guests: 6,
        totalAmount: 580,
        status: 'Pendiente',
        paymentMethod: 'Tarjeta de crédito',
        paymentStatus: 'Pendiente',
    },
    {
        id: '1004',
        cabinId: '4',
        cabinName: 'Cabaña Bosque',
        customerId: 'c4',
        customerName: 'Ana Martínez',
        customerEmail: 'ana@ejemplo.com',
        customerPhone: '+34 645 678 901',
        startDate: '2025-03-22',
        endDate: '2025-03-25',
        nights: 3,
        guests: 2,
        totalAmount: 420,
        status: 'Confirmada',
        paymentMethod: 'PayPal',
        paymentStatus: 'Pagado',
    },
    {
        id: '1005',
        cabinId: '5',
        cabinName: 'Cabaña Río',
        customerId: 'c5',
        customerName: 'Luis Sánchez',
        customerEmail: 'luis@ejemplo.com',
        customerPhone: '+34 656 789 012',
        startDate: '2025-03-25',
        endDate: '2025-03-30',
        nights: 5,
        guests: 3,
        totalAmount: 675,
        status: 'Confirmada',
        paymentMethod: 'Efectivo',
        paymentStatus: 'Pendiente',
    },
    {
        id: '1006',
        cabinId: '1',
        cabinName: 'Cabaña Pino',
        customerId: 'c6',
        customerName: 'Elena Gómez',
        customerEmail: 'elena@ejemplo.com',
        customerPhone: '+34 667 890 123',
        startDate: '2025-03-28',
        endDate: '2025-04-02',
        nights: 5,
        guests: 2,
        totalAmount: 550,
        status: 'Pendiente',
        paymentMethod: 'Tarjeta de crédito',
        paymentStatus: 'Pendiente',
    },
    {
        id: '1007',
        cabinId: '2',
        cabinName: 'Cabaña Lago',
        customerId: 'c7',
        customerName: 'Roberto Fernández',
        customerEmail: 'roberto@ejemplo.com',
        customerPhone: '+34 678 901 234',
        startDate: '2025-04-01',
        endDate: '2025-04-05',
        nights: 4,
        guests: 5,
        totalAmount: 720,
        status: 'Confirmada',
        paymentMethod: 'Transferencia bancaria',
        paymentStatus: 'Pagado',
    },
    {
        id: '1008',
        cabinId: '3',
        cabinName: 'Cabaña Montaña',
        customerId: 'c8',
        customerName: 'Sofía López',
        customerEmail: 'sofia@ejemplo.com',
        customerPhone: '+34 689 012 345',
        startDate: '2025-04-05',
        endDate: '2025-04-10',
        nights: 5,
        guests: 7,
        totalAmount: 950,
        status: 'Cancelada',
        paymentMethod: 'Tarjeta de crédito',
        paymentStatus: 'Reembolsado',
        observations:
            'Cancelación por enfermedad. Se ha reembolsado el importe completo.',
    },
    {
        id: '1009',
        cabinId: '4',
        cabinName: 'Cabaña Bosque',
        customerId: 'c9',
        customerName: 'Miguel Torres',
        customerEmail: 'miguel@ejemplo.com',
        customerPhone: '+34 690 123 456',
        startDate: '2025-04-08',
        endDate: '2025-04-12',
        nights: 4,
        guests: 2,
        totalAmount: 480,
        status: 'Confirmada',
        paymentMethod: 'PayPal',
        paymentStatus: 'Pagado',
    },
    {
        id: '1010',
        cabinId: '5',
        cabinName: 'Cabaña Río',
        customerId: 'c10',
        customerName: 'Carmen Ruiz',
        customerEmail: 'carmen@ejemplo.com',
        customerPhone: '+34 601 234 567',
        startDate: '2025-04-12',
        endDate: '2025-04-16',
        nights: 4,
        guests: 4,
        totalAmount: 600,
        status: 'Confirmada',
        paymentMethod: 'Tarjeta de crédito',
        paymentStatus: 'Pagado',
    },
    {
        id: '1011',
        cabinId: '1',
        cabinName: 'Cabaña Pino',
        customerId: 'c11',
        customerName: 'Javier Moreno',
        customerEmail: 'javier@ejemplo.com',
        customerPhone: '+34 612 345 678',
        startDate: '2025-04-15',
        endDate: '2025-04-20',
        nights: 5,
        guests: 3,
        totalAmount: 575,
        status: 'Pendiente',
        paymentMethod: 'Transferencia bancaria',
        paymentStatus: 'Pendiente',
    },
    {
        id: '1012',
        cabinId: '2',
        cabinName: 'Cabaña Lago',
        customerId: 'c12',
        customerName: 'Laura Díaz',
        customerEmail: 'laura@ejemplo.com',
        customerPhone: '+34 623 456 789',
        startDate: '2025-04-18',
        endDate: '2025-04-22',
        nights: 4,
        guests: 6,
        totalAmount: 720,
        status: 'Confirmada',
        paymentMethod: 'Tarjeta de crédito',
        paymentStatus: 'Pagado',
        observations: 'Solicitan cuna para bebé.',
    },
];
