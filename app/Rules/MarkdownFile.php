<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Http\UploadedFile;
use League\CommonMark\CommonMarkConverter;

class MarkdownFile implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!$value instanceof UploadedFile || !$value->isValid()) {
            $fail('The ' . $attribute . ' must be a valid file.');
        }

        try {
            $content = file_get_contents($value->getRealPath());
            $converter = new CommonMarkConverter();
            $converter->convert($content);
        } catch (\Exception $e) {
            $fail('The ' . $attribute . ' must be a valid markdown file.');
        }
    }
}
