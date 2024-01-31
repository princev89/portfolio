'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('https://drive.google.com/file/d/1Mw794OGNPR1XARKBxEAOyCTskT2zY-go/view', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
