import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f', '#edc948', '#b07aa1'];

const CATEGORY_LABELS = {
  food: 'Food',
  housing: 'Housing',
  utilities: 'Utilities',
  transport: 'Transport',
  entertainment: 'Entertainment',
  salary: 'Salary',
  other: 'Other',
};

function SpendingChart({ transactions }) {
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const data = Object.entries(expensesByCategory).map(([category, value]) => ({
    name: CATEGORY_LABELS[category] || category,
    value,
  }));

  if (data.length === 0) {
    return (
      <div className="spending-chart">
        <h2>Spending by Category</h2>
        <p className="no-data">No expense data to display.</p>
      </div>
    );
  }

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
          <XAxis dataKey="name" tick={{ fontSize: 13 }} />
          <YAxis tickFormatter={(v) => `$${v}`} tick={{ fontSize: 13 }} />
          <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
