export default function SkillBadge({ skill }) {
  return (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-500/20 text-accent-600 dark:text-accent-400 border border-accent-500/30">
      {skill}
    </span>
  );
}
