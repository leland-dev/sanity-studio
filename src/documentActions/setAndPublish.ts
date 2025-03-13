import {
  type DocumentActionComponent,
  type DocumentActionProps,
  useDocumentOperation,
} from 'sanity';

export const createSetAndPublishAction = (
  originalPublishAction: DocumentActionComponent,
) => {
  const SetAndPublishAction: DocumentActionComponent = (
    props: DocumentActionProps,
  ) => {
    const { patch } = useDocumentOperation(props.id, props.type);

    const defaultPublishAction = originalPublishAction(props);

    return defaultPublishAction
      ? {
          ...defaultPublishAction,
          onHandle: () => {
            patch.execute([
              { setIfMissing: { firstPublishedAt: new Date().toISOString() } },
            ]);

            defaultPublishAction.onHandle?.();
          },
        }
      : null;
  };

  return SetAndPublishAction;
};
