import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VerificationStep = ({ formData, updateFormData, errors }) => {
  const [dragActive, setDragActive] = useState({});

  const documentTypes = [
    {
      id: 'businessLicense',
      title: 'Business License',
      description: 'Official business registration document',
      required: true,
      acceptedFormats: '.pdf, .jpg, .png'
    },
    {
      id: 'taxCertificate',
      title: 'Tax Certificate',
      description: 'Tax registration or VAT certificate',
      required: true,
      acceptedFormats: '.pdf, .jpg, .png'
    },
    {
      id: 'companyCertificate',
      title: 'Company Certificate',
      description: 'Certificate of incorporation or similar',
      required: false,
      acceptedFormats: '.pdf, .jpg, .png'
    },
    {
      id: 'qualityCertificate',
      title: 'Quality Certifications',
      description: 'ISO, CE, or other quality certifications',
      required: false,
      acceptedFormats: '.pdf, .jpg, .png'
    }
  ];

  const handleDrag = (e, docType) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (e?.type === 'dragenter' || e?.type === 'dragover') {
      setDragActive(prev => ({ ...prev, [docType]: true }));
    } else if (e?.type === 'dragleave') {
      setDragActive(prev => ({ ...prev, [docType]: false }));
    }
  };

  const handleDrop = (e, docType) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDragActive(prev => ({ ...prev, [docType]: false }));
    
    if (e?.dataTransfer?.files && e?.dataTransfer?.files?.[0]) {
      handleFileUpload(e?.dataTransfer?.files?.[0], docType);
    }
  };

  const handleFileUpload = (file, docType) => {
    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes?.includes(file?.type)) {
      alert('Please upload only PDF, JPG, or PNG files');
      return;
    }

    // Validate file size (max 5MB)
    if (file?.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    // Update form data
    const documents = { ...formData?.documents };
    documents[docType] = {
      file: file,
      name: file?.name,
      size: file?.size,
      uploadedAt: new Date()?.toISOString()
    };
    
    updateFormData({ documents });
  };

  const removeDocument = (docType) => {
    const documents = { ...formData?.documents };
    delete documents?.[docType];
    updateFormData({ documents });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Business Verification
        </h2>
        <p className="text-muted-foreground">
          Upload required documents to verify your business
        </p>
      </div>
      <div className="bg-muted/50 border border-border rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} className="text-primary mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-foreground">
              Secure Document Upload
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Your documents are encrypted and stored securely. We only use them for verification purposes.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {documentTypes?.map((docType) => (
          <div key={docType?.id} className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-medium text-foreground flex items-center">
                  {docType?.title}
                  {docType?.required && (
                    <span className="text-destructive ml-1">*</span>
                  )}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {docType?.description}
                </p>
              </div>
              {!docType?.required && (
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  Optional
                </span>
              )}
            </div>

            {formData?.documents?.[docType?.id] ? (
              <div className="flex items-center justify-between p-3 bg-muted/30 border border-border rounded-md">
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" size={16} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {formData?.documents?.[docType?.id]?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(formData?.documents?.[docType?.id]?.size)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeDocument(docType?.id)}
                  iconName="X"
                  iconSize={14}
                >
                  Remove
                </Button>
              </div>
            ) : (
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-smooth cursor-pointer ${
                  dragActive?.[docType?.id]
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
                onDragEnter={(e) => handleDrag(e, docType?.id)}
                onDragLeave={(e) => handleDrag(e, docType?.id)}
                onDragOver={(e) => handleDrag(e, docType?.id)}
                onDrop={(e) => handleDrop(e, docType?.id)}
                onClick={() => document.getElementById(`file-${docType?.id}`)?.click()}
              >
                <Icon name="Upload" size={24} className="text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-foreground mb-1">
                  Drop your file here or click to browse
                </p>
                <p className="text-xs text-muted-foreground">
                  Supported formats: {docType?.acceptedFormats} (Max 5MB)
                </p>
                <input
                  id={`file-${docType?.id}`}
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => {
                    if (e?.target?.files?.[0]) {
                      handleFileUpload(e?.target?.files?.[0], docType?.id);
                    }
                  }}
                />
              </div>
            )}

            {errors?.[docType?.id] && (
              <p className="text-sm text-destructive mt-2">{errors?.[docType?.id]}</p>
            )}
          </div>
        ))}
      </div>
      <div className="bg-muted/50 border border-border rounded-lg p-4">
        <h3 className="text-sm font-medium text-foreground mb-2">
          What happens next?
        </h3>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• Our team will review your documents within 2-3 business days</li>
          <li>• You'll receive an email notification once verification is complete</li>
          <li>• Verified businesses get priority in search results and buyer trust</li>
          <li>• You can start using the platform immediately while verification is pending</li>
        </ul>
      </div>
    </div>
  );
};

export default VerificationStep;