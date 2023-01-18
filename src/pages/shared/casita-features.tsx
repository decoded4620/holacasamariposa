import styles from "./casita-features.module.scss";

export interface Feature {
  icon: string;
  label: string;
}

export interface CasitaFeaturesProps {
  featuresTitle: string;
  labels: Feature[];
}

export default function CasitaFeatures(props: CasitaFeaturesProps) {
  const halfLabels = Math.round(props.labels.length / 2);
  const leftHalf: Feature[] = props.labels.slice(0, halfLabels);
  const rightHalf: Feature[] = props.labels.slice(halfLabels);

  return (
    <div>
      <h2>{props.featuresTitle}</h2>
      {window.innerWidth > 550 && (
        <table className={styles.featureTable}>
          <tbody>
            <tr>
              <td className={styles.featureRow}>
                <div>
                  <ul>
                    {leftHalf.map((featureLabel) => (
                      <li key={featureLabel.label}>
                        <i aria-hidden="true" className={featureLabel.icon}></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;{featureLabel.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
              <td className={styles.featureRow}>
                <ul>
                  {rightHalf.map((featureLabel) => (
                    <li key={featureLabel.label}>
                      <i aria-hidden="true" className={featureLabel.icon}></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;{featureLabel.label}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {window.innerWidth <= 550 && (
        <table className={styles.featureTable}>
          <tbody>
            <tr>
              <td className={styles.featureRow}>
                <ul>
                  {props.labels.map((featureLabel) => (
                    <li key={featureLabel.label}>
                      <i aria-hidden="true" className={featureLabel.icon}></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;{featureLabel.label}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
