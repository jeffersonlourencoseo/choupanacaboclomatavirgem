// Calendário das giras abertas (informado pela casa em 11/11/2026).
// Para mudar: edite as datas avulsas ou a sequência abaixo. Horário: 18h às 21h.

const datasAvulsas = ['2026-11-18', '2026-12-02']; // quartas-feiras

// A partir de 23/01/2027: sábados, de 14 em 14 dias, até dezembro de 2027
const inicioSequencia = '2027-01-23';
const fimSequencia = '2027-12-31';
const intervaloDias = 14;

export const horaInicio = '18:00';
export const horaFim = '21:00';

function gerar(): string[] {
  const lista = [...datasAvulsas];
  const d = new Date(`${inicioSequencia}T12:00:00Z`);
  const fim = new Date(`${fimSequencia}T12:00:00Z`);
  while (d <= fim) {
    lista.push(d.toISOString().slice(0, 10));
    d.setUTCDate(d.getUTCDate() + intervaloDias);
  }
  return lista.sort();
}

export const datasGiras = gerar();

const tz = 'America/Sao_Paulo';
const meio = (iso: string) => new Date(`${iso}T12:00:00Z`);

export const formatoLongo = (iso: string) =>
  meio(iso).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' });

export const formatoCurto = (iso: string) =>
  meio(iso).toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short', timeZone: 'UTC' }).replace(/\./g, '');

export const diaSemana = (iso: string) => meio(iso).toLocaleDateString('pt-BR', { weekday: 'long', timeZone: 'UTC' });

/** Data de hoje (AAAA-MM-DD) no fuso de Brasília. */
export const hojeISO = () => new Date().toLocaleDateString('en-CA', { timeZone: tz });

export const proximas = (aPartirDe = hojeISO()) => datasGiras.filter((d) => d >= aPartirDe);

/** Datas agrupadas por mês, para o calendário. */
export function porMes(datas: string[]) {
  const grupos = new Map<string, string[]>();
  for (const d of datas) {
    const chave = d.slice(0, 7);
    if (!grupos.has(chave)) grupos.set(chave, []);
    grupos.get(chave)!.push(d);
  }
  return [...grupos].map(([mes, dias]) => ({
    mes,
    titulo: meio(`${mes}-15`).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric', timeZone: 'UTC' }),
    dias,
  }));
}
